"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


export default function FAQSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> How are the Winners Chosen?</AccordionTrigger>
          <AccordionContent>
            All our draws are based on the Mexican National Lottery for Public
            Assistance . The winner of lotte will be the participant whose
            ticket number matches the last digits of the first prize winner of
            the National Lottery (the dates will be published on our official
            website).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What Happens when the Winnning Number is an Unsold Ticket?
          </AccordionTrigger>
          <AccordionContent>
            A new winner is chosen by performing the same dynamic on another
            nearby date (the new date will be announced). This means that you
            would have twice as many chances of winning with your same ticket!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Where are the Winners Pubished?</AccordionTrigger>
          <AccordionContent>
            On our official website page Lotte you can find each and every one
            of our previous draws, as well as the live broadcasts with the
            National Lottery and the prize giving to the winners!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-6 text-center">
        <Button variant="outline">VIEW MORE</Button>
      </div>
    </section>
  );
}
