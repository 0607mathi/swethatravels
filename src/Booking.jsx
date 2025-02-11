import React, { useState } from 'react'
import data from './data.json'
import { use } from 'react'
export const Booking = () => {
function Vechical1(){
  data.BookingDetails.orgin = origin
  data.BookingDetails.destination = destination
  data.BookingDetails.fromDate = fromDate
  data.BookingDetails.toDate = toDate
  data.BookingDetails.Vechicaldetails = data.booking.Vechical1[0]

  const bookingData=(`
  Orgin       :${data.BookingDetails.orgin}
  Destination :${data.BookingDetails.destination}
  FromDate    :${data.BookingDetails.fromDate}
  ToDate      :${data.BookingDetails.toDate}
  Vechical    :${data.BookingDetails.Vechicaldetails}
  `)
  let whatsapp1 = `https://wa.me/${data.Contact.phone1}?text=${bookingData}`
  let whatsapp2 = `https://wa.me/${data.Contact.phone2}?text=${bookingData}`
  window.open(whatsapp1,"_blank")
  window.open(whatsapp2,"_blank")
}

function Vechical2(){
  data.BookingDetails.orgin = origin
  data.BookingDetails.destination = destination
  data.BookingDetails.fromDate = fromDate
  data.BookingDetails.toDate = toDate
  data.BookingDetails.Vechicaldetails = data.booking.Vechical2[0]

  const bookingData=(`
  orgin:${data.BookingDetails.orgin}
  destination:${data.BookingDetails.destination}
  fromDate:${data.BookingDetails.fromDate}
  toDate:${data.BookingDetails.toDate}
  Vechical:${data.BookingDetails.Vechicaldetails}
  `)
  let whatsapp1 = `https://wa.me/${data.Contact.phone1}?text=${bookingData}`
  let whatsapp2 = `https://wa.me/${data.Contact.phone2}?text=${bookingData}`
  window.open(whatsapp1,"_blank")
  window.open(whatsapp2,"_blank")
}

function Vechical3(){
  data.BookingDetails.orgin = origin
  data.BookingDetails.destination = destination
  data.BookingDetails.fromDate = fromDate
  data.BookingDetails.toDate = toDate
  data.BookingDetails.Vechicaldetails = data.booking.Vechical3[0]

  const bookingData = (`
  orgin:${data.BookingDetails.orgin}
  destination:${data.BookingDetails.destination}
  fromDate:${data.BookingDetails.fromDate}
  toDate:${data.BookingDetails.toDate}
  Vechical:${data.BookingDetails.Vechicaldetails}
  `)
  let whatsapp1 = `https://wa.me/${data.Contact.phone1}?text=${bookingData}`
  let whatsapp2 = `https://wa.me/${data.Contact.phone2}?text=${bookingData}`
  window.open(whatsapp1,"_blank")
  window.open(whatsapp2,"_blank")
}

function Vechical4(){
  data.BookingDetails.orgin = origin
  data.BookingDetails.destination = destination
  data.BookingDetails.fromDate = fromDate
  data.BookingDetails.toDate = toDate
  data.BookingDetails.Vechicaldetails = data.booking.Vechical4[0] 

  const bookingData=(`
  orgin:${data.BookingDetails.orgin}
  destination:${data.BookingDetails.destination}
  fromDate:${data.BookingDetails.fromDate}
  toDate:${data.BookingDetails.toDate}
  Vechical:${data.BookingDetails.Vechicaldetails}
  `)

  let whatsapp1 = `https://wa.me/${data.Contact.phone1}?text=${bookingData}`
  // let whatsapp2 = `https://wa.me/${data.Contact.phone2}?text=${bookingData}`
  window.open(whatsapp1,"_blank")
  // window.open(whatsapp2,"_blank")
}

const [origin,setOrgin]=useState("");
const [destination,setDestination]=useState("");
const [fromDate,setFromDate]=useState("");
const [toDate,setToDate]=useState("");
const [vechicalStatus,setVechicalStatus]=useState(true);
const Origin = (e)=>{
  setOrgin(e.target.value)
}

const Destination = (e)=>{
  setDestination(e.target.value)
}

const FromDate = (e)=>{
  setFromDate(e.target.value)
}

const ToDate = (e)=>{
  setToDate(e.target.value)
}

const bookVechical =()=>{
  alert("Choose Your Vechical!")
  setVechicalStatus(prev =>!prev)
}

  return (
    <>
        <div className="booking-section" id='booking'>
        <div className='headName' data-aos="zoom-in"><span>Booking</span></div>
        {/* select journy date */}
        <div className="date-section" data-aos="zoom-in">
          <div className="origin">
            <span>Origin</span><br />
            <input type="text" placeholder='From' value={origin} onChange={Origin}/>
          </div>
          <div className="destination">
            <span>Destination</span> <br />
            <input type="text" placeholder='To' value={destination} onChange={Destination}/>
          </div>
          <div className="ownwardsdate">
            <span>Onwards Date</span> <br />
            <input type="date" placeholder='From' value={fromDate} onChange={FromDate}/>
          </div>
          <div className="returndate">
            <span>Return Date</span> <br />
            <input type="date" placeholder='From' value={toDate} onChange={ToDate}/>
          </div>
          <button onClick={bookVechical}>Book</button>
        </div>
        <div className="vehicles">

          <div className="box crysta"data-aos="fade-right">
              <img src="bannercrysta.png" className='crysta' alt="" />
              <div className=''>
                <h3>{data.booking.Vechical1[0]}</h3>
                <span>{data.booking.Vechical1[1]}</span>
              </div>
              <button disabled={vechicalStatus} onClick={Vechical1}>Book</button>
          </div>

          <div className="box etios"data-aos="fade-left">
              <img src="etios.png" className='' alt="" />
              <div className=''>
                <h3>{data.booking.Vechical2[0]}</h3>
                <span>{data.booking.Vechical2[1]}</span>
              </div>
              <button disabled={vechicalStatus} onClick={Vechical2}>Book</button>
          </div>

          <div className="box swift"data-aos="fade-right">
              <img src="swiftdizer.png" className='' alt="" />
              <div className=''>
                <h3>{data.booking.Vechical3[0]}</h3>
                <span>{data.booking.Vechical3[1]}</span>
              </div>
              <button disabled={vechicalStatus} onClick={Vechical3}>Book</button>
          </div>

          <div className="box innova"data-aos="fade-left">
              <img src="innova.png" className='' alt="" />
              <div className=''>
                <h3>{data.booking.Vechical4[0]}</h3>
                <span>{data.booking.Vechical4[1]}</span>
              </div>
              <button disabled={vechicalStatus} onClick={Vechical4}>Book</button>
          </div>
          
        </div>
        </div>
    </>
  )
}
