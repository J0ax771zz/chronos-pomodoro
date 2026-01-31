import styles from './styles.module.css'

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

function DefaultInput({ 
    id, 
    labelText, 
    type, 
    ...rest 
}: DefaultInputProps) {
  return (
    <>
      {/* Adding a conditonal option for the text/tittle of the input */}
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}

export default DefaultInput;
