"use client";

import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFInput } from "../../components/hook-form";
import { useAuthContext } from "../../auth/hooks/use-auth-context";
import RHFTextField from "../../components/hook-form/rhf-text-field";
import { APP } from "../../config/global";
import Link from "next/link";
import { paths } from "../../routes/paths";
import { useBoolean } from "../../hooks/use-boolean";
import Iconify from "../../components/iconify";
import LoadingButton from "../../components/loading-button";
import { showToast } from "../../components/react-toastify";
import { Alert, Button } from "@nextui-org/react";

// ----------------------------------------------------------------------

type FormValuesProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function RegisterForm() {
    const { register } = useAuthContext();

    const password = useBoolean();

    const confirmPassword = useBoolean();

    const [errorMsg, setErrorMsg] = useState("");

    const LoginSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required!"),
        lastName: Yup.string().required("Last name is required!"),
        email: Yup.string()
            .required("Email is required!")
            .email("Email must be a valid email address!"),
        password: Yup.string()
            .required("Password is required!")
            .min(6, "Password must be at least 6 characters!"),
        confirmPassword: Yup.string()
            .required("Confirm password is required!")
            .min(6, "Confirm password must be at least 6 characters!"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            await register(
                data.email,
                data.password,
                data.confirmPassword,
                data.firstName,
                data.lastName,
            );
            showToast('success', 'Sign up successfully')
        } catch (error: any) {
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    }, []);

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="typography_h4">{APP.register.form.title}</div>

                    <div className="flex flex-row gap-1">
                        <div className="typography_body2">
                            {APP.register.form.labelHaveAccount}
                        </div>

                        <Link
                            href={paths.auth.login}
                            className="typography_subtitle2 hover:underline text-primary"
                        >
                            {APP.register.form.signIn}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {!!errorMsg &&
                        <div className="w-full flex items-center my-3">
                            <Alert description={null} variant="flat" radius="sm" color="danger" title={errorMsg} />
                        </div>
                    }

                    <div className="flex gap-4 items-center">
                        <RHFInput
                            isClearable
                            placement="outside"
                            radius="sm"
                            name="firstName"
                            label="First name"
                            placeholder="First name..."
                        />

                        <RHFInput
                            isClearable
                            placement="outside"
                            radius="sm"
                            name="lastName"
                            label="Last name"
                            placeholder="Last name..."
                        />
                    </div>

                    <RHFInput
                        isClearable
                        placement="outside"
                        radius="sm"
                        name="email"
                        label="Email address"
                        placeholder="example@domain.com"
                    />

                    <RHFInput
                        placement="outside"
                        radius="sm"
                        name="password"
                        label="Password"
                        type={password.value ? "text" : "password"}
                        placeholder="6+ characters"
                        isShowStrength
                        endIcon={
                            <Iconify
                                icon={password.value ? "lucide:eye" : "lucide:eye-closed"}
                                onClick={password.onToggle}
                            />
                        }
                    />

                    <RHFInput
                        placement="outside"
                        radius="sm"
                        name="confirmPassword"
                        label="Confirm password"
                        type={confirmPassword.value ? "text" : "password"}
                        placeholder="6+ characters"
                        endIcon={
                            <Iconify
                                icon={confirmPassword.value ? "lucide:eye" : "lucide:eye-closed"}
                                onClick={confirmPassword.onToggle}
                            />
                        }
                        isShowStrength
                    />
                </div>

                <Button isLoading={isSubmitting} radius="sm" type="submit" color="primary" fullWidth>
                    {APP.register.form.button}
                </Button>
            </div>
        </FormProvider>
    );
}
