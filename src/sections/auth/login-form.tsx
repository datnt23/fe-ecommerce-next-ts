"use client";

import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Alert, Button } from "@nextui-org/react";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFInput } from "../../components/hook-form";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import { APP } from "@/config/global";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { useBoolean } from "@/hooks/use-boolean";
import Iconify from "@/components/iconify";
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
            showToast("success", "Sign in successfully");
        } catch (error: any) {
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    }, []);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
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

                <div className="flex flex-col gap-3">
                    {errorMsg && (
                        <div className="w-full flex items-center my-3">
                            <Alert description={null} radius="sm" color="danger" title={errorMsg} />
                        </div>
                    )}

                    <RHFInput
                        name="email"
                        label="Email address"
                        placement="outside"
                        type="email"
                        isClearable
                        radius="sm"
                        placeholder="example@domain.com"
                        startIcon={
                            <Iconify
                                className="text-text-secondary"
                                icon="material-symbols:mail"
                            />
                        }
                    />

                    <RHFInput
                        name="password"
                        label="Password"
                        type={password.value ? "text" : "password"}
                        placeholder="6+ characters"
                        placement="outside"
                        radius="sm"
                        startIcon={
                            <Iconify
                                className="text-text-secondary"
                                icon="material-symbols:key"
                            />
                        }
                        endIcon={
                            <div className="flex" onClick={password.onToggle}>
                                <Iconify
                                    className="text-text-secondary"
                                    icon={password?.value ? "lucide:eye" : "lucide:eye-closed"}
                                />
                            </div>
                        }
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

                <Button radius="sm" type="submit" isLoading={isSubmitting} color="primary" fullWidth>
                    {APP.login.form.button}
                </Button>
            </div>
        </FormProvider>
    );
}
