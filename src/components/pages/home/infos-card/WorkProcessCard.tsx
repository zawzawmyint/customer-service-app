import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import InfoCardTitle from "./InfoCardTitle";

const WorkProcessCard = () => {
  return (
    <div>
      <CardContent>
        <div className="space-y-2 flex justify-start items-center my-10">
          <CardTitle className="text-5xl">Wanna know how we work...</CardTitle>
        </div>
      </CardContent>
      <CardFooter>
        <InfoCardTitle text="Work process" />
      </CardFooter>
    </div>
  );
};

export default WorkProcessCard;
