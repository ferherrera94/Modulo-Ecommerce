import amqp from 'amqplib'

import { queueNames, rabbitmq_host } from '../config'

export const ecommerce = {

    /* -------------------------//--------------------------------//------------------------------- */

    initialReserve: async(req, res) => {

        try {

            const { uuid, process, processStep, label, isPaid, data } = req.body

            const order = {
                uuid: uuid,
                process: process,
                isPaid: isPaid,
                processStep: processStep,
                processHistory: [{ process, processStep }],
                label: label,
                data: data
            }

            const connection = await amqp.connect(rabbitmq_host)

            const channel = await connection.createChannel()

            channel.assertQueue(queueNames.reserves)

            const sent = await channel.sendToQueue(queueNames.reserves, Buffer.from(JSON.stringify(order)), { persistent: true })

            sent ? res.json({msg: 'reservation in queue'}) : res.json({error: 'reservation error'})

        }catch(error){
            console.log(error)
            res.json({error: 'Internal Error'})
        }

    },

    /* -------------------------//--------------------------------//------------------------------- */

    reservePayment: async(req, res) => {

        const { uuid, process, processStep } = req.body

        const order = await orderModel.findOne({uuid: uuid}, { process: 1, processStep: 1, processHistory: 1, isPaid: 1 })

        order.processStep = processStep
        order.isPaid = true
        
        await orderModel.updateOne({uuid: uuid}, {
            $push: {
                'processHistory': {
                    process: process,
                    processStep: processStep
                }
            }
        })

        order.save()
        
        res.json({msg: 'Revervation is paid'})

    }


}