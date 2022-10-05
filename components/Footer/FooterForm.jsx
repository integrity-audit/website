const FooterForm = () => {
  return (
    <div>
      <form className="flex flex-col" action="" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FooterForm