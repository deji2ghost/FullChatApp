import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormInputProps } from './FormInputProps'

const FormInput = ({type, value, name, handleChange, accept}: FormInputProps) => {
  return (
    <div>
      <Label htmlFor={name}>{name}</Label>
      <Input accept={accept} name={name} type={type} value={value} onChange={handleChange}/>
    </div>
  )
}

export default FormInput
