"use client";

import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import { APP } from "@/config-global";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { useBoolean } from "@/hooks/use-boolean";
import Iconify from "@/components/iconify";
import LoadingButton from "@/components/loading-button";
import { toast } from "react-toastify";
import { showToast } from "@/components/react-toastify";

// ----------------------------------------------------------------------

type FormValuesProps = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const { login } = useAuthContext();

    const password = useBoolean();

    const [errorMsg, setErrorMsg] = useState("");

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        email: "",
        password: "",
    };

    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = useCallback(async (data: FormValuesProps) => {
        try {
            await login(data.email, data.password);
            showToast('success', 'Sign in successfully')
        } catch (error: any) {
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    }, []);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 mb-6">
                <div className="typography_h4">{APP.login.form.title}</div>

                <div className="flex flex-row gap-1">
                    <div className="typography_body2">
                        {APP.login.form.labelNotHaveAccount}
                    </div>

                    <Link
                        href={paths.auth.register}
                        className="typography_subtitle2 hover:underline text-primary"
                    >
                        {APP.login.form.createAccount}
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                {!!errorMsg &&
                    <div className="bg-error-lighter py-1.5 px-4 rounded-lg w-full h-full flex flex-row gap-3 items-center">
                        <Iconify className="text-error-main" icon="mdi:error" />
                        <div className="typography_body2 text-error-darker py-2 w-full h-full">{errorMsg}</div>
                    </div>
                }

                <RHFTextField
                    name="email"
                    label="Email address"
                    placeholder="example@domain.com"
                />

                <RHFTextField
                    name="password"
                    label="Password"
                    type={password.value ? "text" : "password"}
                    placeholder="6+ characters"
                    endIcon={
                        <Iconify
                            icon={password.value ? "lucide:eye" : "lucide:eye-closed"}
                        />
                    }
                    onEndIconClick={password.onToggle}
                />
            </div>

            {/* <div className="flex flex-row justify-end border-inherit">
                <Link
                    href={paths.auth.resetPassword}
                    className="typography_body2 hover:underline self-end py-4"
                >
                    {APP.login.form.forgotPassword}
                </Link>
            </div> */}

            <LoadingButton className="mt-6" fullWidth type="submit" loading={isSubmitting} color="primary" size="medium" >
                {APP.login.form.button}
            </LoadingButton>
        </FormProvider>
    );
}
