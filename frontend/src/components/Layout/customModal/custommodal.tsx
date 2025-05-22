import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface CustomModalProps {
  open: boolean;
  Cancel: string;
  Add: string;
  handleCancel: () => void;
  handleAdd: () => void;
  Header: string;
  headerDescription: string;
}

const Custommodal: React.FC<CustomModalProps> = ({
  open,
  Cancel,
  Add,
  Header,
  headerDescription,
  handleCancel,
  handleAdd,
}) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{Header}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <Button onClick={handleCancel}>{Cancel}</Button>
          <Button onClick={handleAdd}>{Add}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Custommodal;
