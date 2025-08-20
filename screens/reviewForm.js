import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";

//yup.object({...}) defines a schema object, inside the object we specify the rules
const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .number()
    .required()
    .test("is-num-1-5", "Rating must be a number between 1 and 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      {/*Formik onSubmit={(values)=>{}}, where values comes from initialValues,
      Formik onSubmit={} gets called from the button with onPress={props.handleSubmit}
      Formik onSubmit={(actions)=>{}} where action contains methods to configure onSubmit={} */}
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {/*{(props)=>()}, where props comes from Formik*/}
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
