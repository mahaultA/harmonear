import Timer from "@/app/Timer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TimerDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Track practice time ⏱️</Button>
      </DialogTrigger>
      <DialogContent>
        <Timer />
      </DialogContent>
    </Dialog>
  );
};

export default TimerDialog;
