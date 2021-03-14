const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        class="open-lightbox"
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    )
  }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#1890ff' }}>
      {message.text}
    </div>
  )
}

export default MyMessage;