import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";


export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();

  const createVisitor = async (data) => {


    const savedUserResponse = await fetch(

      `${"http://localhost:5000/api/v1"}/createVisitor`,//backend url

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    )

    if (savedUserResponse.ok) {
      toast.success('Data is submitted successfully , Thank You!')
    }
    else {
      toast.error('Oops something went wrong, Please try again!')

    }
    console.log("FORM RESPONSE......", savedUserResponse);

    // navigate("/");

  };


  return (
    <section className={style.container} id='contactform'>
      <h2 className={style.title} >Show Your Presence</h2>

      <fieldset>
        <legend>For any Complaint/ Suggestion/ Request/ Feedback  : )  </legend>
        <form className={style.form} onSubmit={handleSubmit(createVisitor)}>

          <div className={style.formRow} id={style.name} >
            <label htmlFor="name">Name<sup style={{ color: "red" }}>*</sup> :</label>
            <input
              id='name'
              type="text"
              name="name"
              placeholder="enter your name"
              {...register("name")}


            />
          </div>

          <br />

          <div className={style.formRow} id={style.email}>
            <label htmlFor="email">Email<sup style={{ color: "red" }}>*</sup> :</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              {...register("email")}



            />
          </div>
          <br />
          <div className={style.formRow} id={style.phone}>
            <label htmlFor="phone">Phone No. :</label>
            <input
              id='phone'
              type="number"
              name="phone"
              placeholder="enter your phone no."
              {...register("phone")}
            />
          </div>

          <br />

          <div className={style.formRow} id={style.message}>
            <label htmlFor="message">Message :</label>
            <textarea
              name="message"
              id="message"
              placeholder="enter your Message here..."
              cols={4}

              {...register("message")}

            />
          </div>
          <br />
          {/* <div  className={style.submitContainer}> */}
          <button type="submit">Submit</button>

          {/* </div> */}



        </form>
      </fieldset>

    </section>

  );

};



