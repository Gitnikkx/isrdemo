import React from "react";
import { Box, Button, Grid, Text } from "atoms";
import { useFormik } from "formik";
export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
    },

    onSubmit: (values) => {
      console.log("Form Values", values);
    },
  });

  const validate = (values) => {};
  //console.log('Form Values',formik.values)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid m="5rem" width="50%" height="20rem">
          <div className="form-control">
            <Text fontSize="3rem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            </Text>
          </div>
          <div className="form-control">
            {" "}
            <Text fontSize="3rem">
              {" "}
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />{" "}
              {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            </Text>
          </div>
          <div className="form-control">
            {" "}
            <Text fontSize="3rem">
              {" "}
              <label htmlFor="number">Number</label>
              <input
                type="number"
                id="number"
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
              />{" "}
              {formik.errors.number ? <div className="error">{formik.errors.number}</div> : null}
            </Text>
          </div>
          <Text fontSize="3rem">
            {" "}
            <Button type="submit">
              <submit>LOGIN</submit>
            </Button>
          </Text>
        </Grid>
      </form>
    </>
  );
};
