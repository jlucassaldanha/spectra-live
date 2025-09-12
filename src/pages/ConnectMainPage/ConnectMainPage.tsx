import "./ConnectMainPage.css";

import { useEffect, useState } from "react";

import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaTwitch } from "react-icons/fa";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import Input from "../../components/old/Input/Input";
import Button from "../../components/new/Button/Button";
import IconSection from "../../components/old/IconSection/IconSection";
import FormSection from "../../components/old/FromSection/FormSection";

type InputType = {
  id: number;
  value: string;
};

const schema = yup
  .object({
    broadcasterName: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\S+$/, "Sem espaços"),
    blockLogins: yup
      .array()
      .of(
        yup.object({
          value: yup
            .string()
            .required("O usuário não pode estar vazio")
            .matches(/^\S+$/, "Sem espaços"),
        })
      )
      .when([], {
        is: (arr: InputType[]) => arr && arr.length > 0,
        then: (schema) => schema.required("Campo obrigatório"),
        otherwise: (schema) => schema,
      }),
  })
  .required();

type FormType = {
  broadcasterName: string;
  blockLogins?: { value: string }[] | undefined;
};

function ConnectMainPage() {
  const [formData, setFormData] = useState<FormType>();

  const client_id: string = "gfiv47o2hp43s1cip3bxbjx1hc84n9";
  const redirect_uri: string = "https://spectralive.vercel.app";
  //const redirect_uri: string = "http://localhost:5173"

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      broadcasterName: "",
      blockLogins: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "blockLogins",
  });

  useEffect(() => {
    if (formData) {
      localStorage.setItem("client_id", client_id);
      localStorage.setItem("broadcaster_login", formData.broadcasterName);
      localStorage.setItem(
        "block_logins",
        JSON.stringify(
          formData.blockLogins
            ? formData.blockLogins.map((login) => login.value)
            : []
        )
      );

      window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`;
      //window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=http://localhost:5173/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`
    }
  }, [formData]);

  return (
    <div className="main">
      <IconSection />
      <FormSection
        onSubmit={handleSubmit((data: FormType) => setFormData(data))}
      >
        <div className="text">
          Insira o nome do seu canal e conecte-se pela Twitch
          <Input {...register("broadcasterName")} />
          {errors.broadcasterName && (
            <p className="errorBlock">{errors.broadcasterName.message}*</p>
          )}
        </div>
        <div className="addRemLogin">
          <div className="loginBlock">
            Adicionar usuários fora de vista?
            <Button
              icon={<IoIosAdd size={35} />}
              onClick={() => append({ value: "" })}
              type="button"
            />
          </div>
          {fields.map((input, index) => (
            <div className="errorBlock" key={input.id}>
              <div className="loginBlock">
                <Input {...register(`blockLogins.${index}.value`)} />
                <Button
                  icon={<IoIosRemove size={35} />}
                  onClick={() => remove(index)}
                  type="button"
                />
              </div>
              {errors.blockLogins?.[index]?.value && (
                <p className="errorBlock">
                  {errors.blockLogins[index].value.message}*
                </p>
              )}
            </div>
          ))}
        </div>
        <Button classname="buttonConnect" type="submit">
          Conectar com a twitch
          <FaTwitch size={25} />
        </Button>
      </FormSection>
    </div>
  );
}

export default ConnectMainPage;
