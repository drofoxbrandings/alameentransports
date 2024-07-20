import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, MenuItem, TextField } from "@mui/material";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const Form = ({ submit, company }) => {
  const schema = Yup.object().shape({
    department: Yup.string().required("*Required"),
    name: Yup.string()
      .required("*Required")
      .min(3, "Name requires minimum three characters!!"),
    email: Yup.string()
      .required("*Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email id!!"
      ),
    phone: Yup.string()
      .required("*Required")
      .matches(
        /(?:0)(?:50|52|54|55|56|58)[0-9]{7}/,
        "Please enter a valid UAE mobile number!!"
      ),
    message: Yup.string()
      .required("*Required")
      .min(26, "Message requires minimum 26 characters!!"),
  });

  const { handleSubmit, control, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(submit)} netlify>
      <FormControl fullWidth margin="normal">
        <Controller
          name="department"
          control={control}
          defaultValue={company}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Select department"
              size="small"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
              select
              value={company}
            >
              <MenuItem value="Limousine">Limousine</MenuItem>
              <MenuItem value="Tour by Luxury Bus">Tour by Luxury Bus</MenuItem>
              <MenuItem value="Passenger transport">
                Passenger transport
              </MenuItem>
              <MenuItem value="School transport">School transport</MenuItem>
            </TextField>
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              size="small"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              size="small"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Mobile number"
              size="small"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
              type="number"
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Message"
              size="small"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
              multiline
              rows={4}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#C53A50",
            "&:hover": { backgroundColor: "#89071C" },
          }}
        >
          Enquire now
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
