import styles from './styles.module.css'

type HeadingProps = {
    //Accept any type of children inside the component
    children: React.ReactNode;
}

function Heading({children}: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;