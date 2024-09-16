import Motion from "@/components/framer-motion/Motion";
import { Button } from "@/components/ui/button";

const FAQsHeader = () => {
  return (
    <div className="space-y-5 text-center sticky top-28 left-0">
      <Motion>
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-5xl font-semibold ">
            Frequenty Asked Questions
          </h1>
          <p className="font-medium max-w-xl mx-auto">
            Quick answers to questions you my have about our services.Can&apos;t
            find what you are looking for? Check out our full documentation.
          </p>
          <div className="space-x-3">
            <Button variant={"link"} className="shadow-sm ">
              Documentation
            </Button>
            <Button className="space-x-5">Get In Touch</Button>
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default FAQsHeader;
