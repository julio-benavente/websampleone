import { Button } from "@/components";
import { ReactNode } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";

export const FormProviderDecorator = ({
  showData = true,
  formProps,
  ...props
}: {
  formProps?: UseFormProps;
  showData?: boolean;
  children: ReactNode;
}) => {
  const formMethods = useForm({ mode: "all", ...formProps });
  const onSubmit = (data) => {
    console.log({ message: "Passed", data });
  };
  const onFail = (error) => {
    console.log({ message: "Failed", data: error });
  };
  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit, onFail)} {...props}>
      <FormProvider {...formMethods}>{props.children}</FormProvider>

      <Button type="submit" className="block mt-8">
        Submit
      </Button>

      {showData && (
        <pre className="mt-4">
          {JSON.stringify(formMethods.watch(), null, 2)}
        </pre>
      )}
    </form>
  );
};

export const SectionDecorator = ({ ...props }: { children: ReactNode }) => {
  return (
    <div className="m-12" {...props}>
      {props.children}
    </div>
  );
};
