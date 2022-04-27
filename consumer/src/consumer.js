import amqp from 'amqplib'
import orderModel from './models/Orders'

import { queueNames, rabbitmq_host } from './config'

export async function consumer(){

    try {

        setTimeout( async() => {

            const connection = await amqp.connect(rabbitmq_host)
                
            const channel = await connection.createChannel()


            console.log('Consumer is conected')
            

            channel.assertQueue(queueNames.reserves)

            channel.consume(queueNames.reserves, async(msg) => {
                
                const content = JSON.parse(msg.content.toString())

                const newReserveOrder = await new orderModel(content)

                await newReserveOrder.save()

                channel.ack(msg)

            })

        },120000)

    }catch(error){

        console.log(error)
    
    }

}