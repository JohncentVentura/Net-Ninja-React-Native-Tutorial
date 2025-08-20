import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Form, Formik } from "formik";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      {/*Formik onSubmit={(values)=>{}}, where values comes from initialValues,
      Formik onSubmit={(values)=>{}} gets called from the button with onPress={props.handleSubmit}*/}
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
            console.log(values);
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
