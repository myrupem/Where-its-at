import React from 'react'

function Ticket({ ticket }) {
  console.log(ticket)
  return (
    <div>
      <p>WHAT</p>
      <h1>{ticket.name}</h1>
      <section>
        <p>WHERE</p>
        <p>{ticket.where}</p>
      </section>
      <section>
        <div>
          <p>WHEN</p>
          <p>{ticket.when.date}</p>
        </div>
        <div>
          <p>FROM</p>
          <p>{ticket.when.from}</p>
        </div>
        <div>
          <p>TO</p>
          <p>{ticket.when.to}</p>
        </div>
      </section>
      <section>
        <p>INFO</p>
        <p> Section {ticket.section} - seat {ticket.seat} </p>
      </section>
      <section>
        <p>BARCODE TEXT - {ticket.uid}</p>
        <p>#a2ed7 - första siffrorna i idt??</p>
      </section>
    </div>
  )
}

export default Ticket