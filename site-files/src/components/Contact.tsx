import React, {useState} from "react";
import "./Contact.css"

const Contact: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // add formspree api key
        console.log("form submitted:", {name, email, msg})

        setName("")
        setEmail("")
        setMsg("")
    }

    return (
        <section id = "contact" className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                    </div>
                    <button type="submit">Sent Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact