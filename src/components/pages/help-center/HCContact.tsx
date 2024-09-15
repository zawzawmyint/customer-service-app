import { Button } from "@/components/ui/button";

const HCContact = () => {
  return (
    <div className="bg-[url('/images/help-center.jpg')] bg-cover bg-no-repeat w-full h-full p-2">
      <div className="max-w-5xl mx-auto py-10 sm:py-16 flex flex-col sm:flex-row gap-2 flex-wrap justify-center sm:justify-between items-center backdrop-blur-lg">
        <h1 className="text-lg sm:text-xl font-bold tracking-wider text-white text-pretty  text-center">
          Could not find what you are looking for?
        </h1>
        <Button variant={"secondary"}>Contact Us</Button>
      </div>
    </div>
  );
};

export default HCContact;
