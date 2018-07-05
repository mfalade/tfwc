import React from 'react';

export const modules = {
  lessonOne: {
    title: `Business Overview`,
    description: `Learn how to conduct research and understand your client’s business, with a project/product mindset. Use industry standard frameworks like Five Whys to connect their mission, goals, and objectives to their business purpose. Write a detailed business positioning statement that will drive their project strategy.`
  },
  lessonTwo: {
    title: `Product Description`,
    description: `What is a product? How does this differ from a business?
    Anticipate and identify your potential customers’ problem even before they realize it, and learn how to write key features for disruptive businesses. Learn the key components of a unique value proposition. Use the logical approach to create products by using hypotheses and assumptions to arrive at solutions.`
  },
  lessonThree: {
    title: `Product Strategy`,
    description: `Have you heard about Design Thinking? Learn to use an approach designed by Stanford University, which is popular among Silicon Valley companies.
    Learn how to conduct detailed user research, create user personas, understand their behaviours, and sell to people who are willing to buy your products.`
  },
  lessonFour: {
    title: `Idea Generation`,
    description: `Learn how to perform competitive analysis to generate ideas different to your key competition. Write user stories and acceptance criteria for software development teams. Use various methods - brainstorming, mind mapping, and more to create product features`
  },
  lessonFive: {
    title: `Technical Description`,
    description: `Plan elaborate user interface and user experience design components to show off the high quality of your product. Write detailed and specific technical architecture, development, maintenance and support information to backup your product concept.`
  }
};

export const moduleGoals = {
  optionOne: {
    title: `Become a Five-Star Writer`,
    summary: `This pathway is carefully structured for professionals with a wide range of experience in Product and Project management, who want to write high-level documents for clients. If you are trying to start as a consultant or have some experience, this is a great place to start. You will get access to templates and materials from a demo company to guide you through the entire process. By the end, you will be able to create a Scope of Work worth N1m in the industry.`,
    duration: `5 weeks to complete`
  },

  optionTwo: {
    title: `Become an Idea Expert`,
    summary: `What distinguishes great companies like Nike and Amazon? They use idea generation techniques that surpass users' expectations and build habit-forming products. Are you already a consultant or work with multiple clients? Become an idea generating machine and excel with design-driven ideas.`,
    duration: `2 weeks to complete`
  },

  optionThree: {
    title: `Become a Strategy Expert`,
    summary: `Are you more focused on clients who have a new product at launch, introduction or other similar early stage? This pathway is designed to give you an in-depth refresher on crafting a strategy using a logical approach. This approach will very quickly establish the direction for the product, which you can demonstrate to your clients as a pathway to success.`,
    duration: `2 weeks to complete`
  },

  optionFour: {
    title: `Become an All-Rounder`,
    summary: () => (
      <div>
        <p>Whether you are starting off or a seasoned expert, you will elevate your product & project management knowledge with this full-fledged course.
        Come as you are and leave with:</p>
        <ul className="description-items custom-sytle">
          <li>Product documentation templates worth N1m</li>
          <li>Idea generation techniques used by the likes of Amazon and Nike</li>
          <li>End-to-end knowledge of how to solidify your client base and guarantee their success</li>
        </ul>
      </div>
    ),
    duration: `5 weeks to complete`
  }
}