import styles from "../styles"

const Hero = () => (
    <section className={`flex md:flex-row sm:flex-col xs: flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexCenter} justify-between items-center flex-col xl:px-0 sm:px-16 px-6`}>
            Hello. My Name is Chase.
        </div>
    </section>
  )
  
  export default Hero