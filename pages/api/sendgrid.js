import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (req, res) => {
  try {
    const body = req.body
    const message = `
      name: ${body.name}\r\n
      email: ${body.email}\r\n
      message: ${body.message}
    `
    const data = {
      to: ['khill@integrity-audit.com', 'audits@integrity-audit.com'],
      from: 'Audits <audits@integrity-audit.com>',
      subject: `[Lead from website]: ${body.subject}`,
      text: message,
      html: message.replace(/\r\n/g, '<br />')
    }

    await sendgrid.send(data)
  } catch (error) {
    return res.status(error.statusCode || 500).json({ status: 'error', error: error.message });
  }

  return res.status(200).json({ status: 'ok' })
}

export default sendEmail