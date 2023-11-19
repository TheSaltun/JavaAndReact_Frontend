import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import SaltunTextInput from "../utilities/customFormControls/SaltunTextInput";

export default function PropductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("ürün adı zorunlu"),
    unitPrice: Yup.number().required("ürün fiyatı girmek zorunludur"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
          <SaltunTextInput name="productName" placeHolder="Ürün Adı" />
          <SaltunTextInput name="unitPrice" placeHolder="Ürün Fiyatı" />
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
