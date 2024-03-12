import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack
} from '@chakra-ui/react'

const FaqData = [
    {
        question: "How can I place an order?",
        answer: "You can place an order by browsing our products, adding them to your cart, and completing the checkout process.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, PayPal, and other secure payment methods. You can find more details in the payment options during checkout.",
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the shipping carrier's site.",
    },
    {
        question: "What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of delivery. Please visit our 'Returns' page for more information on the return process and eligibility criteria.",
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we offer international shipping. Shipping costs and delivery times vary depending on the destination. You can view the shipping options during the checkout process.",
    },
    {
        question: "How can I contact customer support?",
        answer: "Our customer support team is available 24/7. You can contact us through our 'Contact Us' page or by sending an email to support@example.com. We aim to respond to all inquiries within 24 hours.",
    },
    {
        question: "Can I modify or cancel my order after placing it?",
        answer: "Once an order is placed, it is processed quickly to ensure prompt delivery. Therefore, modifications or cancellations may not be possible. Please review your order carefully before confirming the purchase.",
    },
    {
        question: "Is my personal information secure?",
        answer: "Yes, we take the security of your personal information seriously. Our website uses encryption technology to protect your data during transmission. You can review our privacy policy for more details on how we handle your information.",
    },
];



const Accordian = () => {
    return (
        <>
        <div className='my-10'>
    {FaqData.map((data) => {
                const { question, answer } = data;
                return (
                    <div className='w-[85%]  mx-auto'>
                <Accordion defaultIndex={[1]} allowMultiple= {true}> 
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' w={"70%"} mx={"auto"} py={5} fontSize={'large'} textAlign='left'>
                            {question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel py={5} fontSize={'large'}>
                        {answer}
                      </AccordionPanel>
                    </AccordionItem>
                  
                  </Accordion></div>)
        })}
        </div>
        </>)


}

export default Accordian