import FadeIn from "./FadeIn"

const GetInTouch = () => {
  return (
    <section className="py-6 px-6 max-w-2xl mx-auto mb-10">
      <FadeIn>
        <h2 className="font-serif text-2xl mb-4">GET IN TOUCH</h2>
        <p className="text-base text-zinc-400">Connect with me on <a href="https://www.linkedin.com/in/agniva-sengupta11" className="underline text-neutral-50"> Linkedin</a> or shoot an <a href = "mailto:agnivasengupta11@gmail.com" className="underline text-neutral-50">email</a>.</p>
      </FadeIn>
    </section>
  )
}

export default GetInTouch;