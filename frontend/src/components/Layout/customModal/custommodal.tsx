import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JSX } from "react";

export interface CustomModalProps {
  open: boolean;
  Cancel: string;
  Add: string;
  handleCancel: () => void;
  handleAdd: () => void;
  Header: string;
  headerDescription: string;
  body: JSX.Element
}

const Custommodal: React.FC<CustomModalProps> = ({
  open,
  Cancel,
  Add,
  Header,
  headerDescription,
  handleCancel,
  handleAdd,
  body
}) => {
  return (
    <Dialog open={open} onOpenChange={handleCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{Header}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        <div>
          { body }
        </div>
        <DialogFooter className="flex">
          <Button onClick={handleCancel}>{Cancel}</Button>
          <Button onClick={handleAdd}>{Add}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Custommodal;
