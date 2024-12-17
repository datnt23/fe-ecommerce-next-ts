export const API = {
  hostUrl: process.env.NEXT_PUBLIC_HOST_API ?? "",
};

export const API_ENDPOINTS = {
  auth: {
    me: "/auth/me",
    login: "/auth/login",
    register: "/auth/register",
  },
};

export const APP = {
  auth: {
    layout: {
      title: "Hi! Welcome to Manage",
      imgUrl: "/assets/illustrations/illustration_dashboard.png",
      bgUrl: "/assets/background/overlay_2.jpg",
    },
  },
  login: {
    form: {
      title: "Sign in to your account",
      labelNotHaveAccount: "Don’t have an account?",
      createAccount: "Create an account",
      forgotPassword: "Forgot password?",
      button: "Sign in",
    },
  },
  register: {
    form: {
      title: "Sign up to your account",
      labelHaveAccount: "Already have an account?",
      signIn: "Sign in",
      forgotPassword: "Forgot password?",
      button: "Sign in",
    },
  },
};

export const STRENGTH_COLOR = {
  errorMain: "#f44336",
  warningDark: "#ffc107",
  orangeMain: "#ffab91",
  successMain: "#00e676",
  successDark: "#00c853",
};

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
};

export const BREAK_POINTS = {
  xs: 480,
  sm: 600,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};
