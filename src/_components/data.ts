import benefitOne from '../../public/Landing-grid-1-one.png';
import benefitTwo from "../../public/landing-grid-1-two.png";
import benefitThree from "../../public/landing-grid-1-three.png";
import benefitFour from "../../public/landing-grid-1-four.png";
import benefitFive from "../../public/landing-grid-1-five.png";
import benefitSix from "../../public/landing-grid-1-six.png";
import tickIcon from '../../public/tick-icon.svg';
import howItWorksOne from '../../public/how-it-works-1.svg';
import howItWorksTwo from '../../public/how-it-works-2.svg';
import howItWorksThree from '../../public/how-it-works-3.svg';
import howItWorksFour from '../../public/how-it-works-4.svg';

export const benefits = [
  {
    id: 1,
    color: "#DBEFDC",
    img: benefitOne,
    title: "Chronic Disease Patients",
    text: "Manage your health with regular check-ups and support to ensure you stay on track with your treatment, because your well-being is our top priority.",
  },
  {
    id: 2,
    color: "#D9E5FB",
    img: benefitTwo,
    title: "Elderly",
    text: "Receive compassionate care right at home by using our user-friendly telehealth services, allowing you to rest easy knowing expert help is just a call away.",
  },
  {
    id: 3,
    color: "#FFF3CD",
    img: benefitThree,
    title: "Working Professionals",
    text: "Schedule flexible appointments that fit into your busy life, allowing you to prioritize your health without hassle and stay on top of your well-being without missing a beat.",
  },
  {
    id: 4,
    color: "#FFE2DF",
    img: benefitFour,
    title: "Mental Health Patients",
    text: "Access confidential counseling and support at your convenience, providing you with the tools to improve your mental well-being and first step towards a brighter tomorrow.",
  },
  {
    id: 5,
    color: "#F4E0FF",
    img: benefitFive,
    title: "Young Adults",
    text: "You can access high-quality healthcare from the comfort of your home and connect with trusted doctors whenever you need them.",
  },
  {
    id: 6,
    color: "#DBEFDC",
    img: benefitSix,
    title: "Parents",
    text: "Get instant access to pediatric care to ensure your child(ren) receive the best possible attention, as we’re here to support your family's health every step of the way.",
  },
];

export const benefitsTwo = [
  {
    id: 1,
    icon: tickIcon,
    text: "Easy Appointment Scheduling",
  },
  {
    id: 2,
    icon: tickIcon,
    text: "Access to Certified Healthcare Providers",
  },
  {
    id: 3,
    icon: tickIcon,
    text: "Telehealth Services",
  },
  {
    id: 4,
    icon: tickIcon,
    text: "Medical Records Management",
  },
  {
    id: 5,
    icon: tickIcon,
    text: "Accessible and Affordable Healthcare"
  }
];

export const howitworks = [
  {
    id: 1,
    header: "01",
    icon: howItWorksOne,
    headerStyles: "font-bold text-[#417BEB] text-[32px] xl:text-[56px]",
    title: "Register or Log In",
    titleStyles: "font-bold text-[#323232] text-[16px] xl:text-[24px]",
    text: "Sign up for a new account or log in to access personalized healthcare services. It's quick and easy.",
    textStyles: "text-[14px] text-[#323232] xl:text-[16px]",
    absolute:
      "flex flex-col items-center text-center gap-y-[20px] max-w-[300px] xl:absolute xl:top-[20px] xl:left-[20px] xl:items-start xl:text-left xl:w-[260px]",
  },
  {
    id: 2,
    header: "02",
    icon: howItWorksTwo,
    headerStyles: "font-bold text-[#417BEB] text-[32px] xl:text-[56px]",
    title: "Choose Doctor",
    titleStyles: "font-bold text-[#323232] text-[16px] xl:text-[24px]",
    text: "Select the service that suits your needs, from virtual consultations to specialist appointments. We offer a range of options for you.",
    textStyles: "text-[14px] text-[#323232] xl:text-[16px]",
    absolute:
      "flex flex-col items-center text-center gap-y-[20px] max-w-[300px] xl:absolute xl:top-[100px] xl:left-[340px] xl:items-start xl:text-left xl:w-[280px]",
  },
  {
    id: 3,
    header: "03",
    icon: howItWorksThree,
    headerStyles: "font-bold text-[#417BEB] text-[32px] xl:text-[56px]",
    title: "Book an Appointment",
    titleStyles: "font-bold text-[#323232] text-[16px] xl:text-[24px]",
    text: "Connect instantly with a licensed doctor through secure video calls. Get expert advice and treatment from the comfort of your home.",
    textStyles: "text-[14px] text-[#323232] xl:text-[16px]",
    absolute:
      "flex flex-col items-center text-center gap-y-[20px] max-w-[300px] xl:absolute xl:top-[180px] xl:left-[640px] xl:items-start xl:text-left xl:w-[260px]",
  },
  {
    id: 4,
    header: "04",
    icon: howItWorksFour,
    headerStyles: "font-bold text-[#417BEB] text-[32px] xl:text-[56px]",
    title: "Manage Records",
    titleStyles: "font-bold text-[#323232] text-[16px] xl:text-[24px]",
    text: "Easily access your medical records anytime and schedule follow-ups as needed. Stay organized and in control of your health journey.",
    textStyles: "text-[14px] text-[#323232] xl:text-[16px]",
    absolute:
      "flex flex-col items-center text-center gap-y-[20px] max-w-[300px] xl:absolute xl:top-[260px] xl:left-[960px] xl:items-start xl:text-left xl:w-[260px]",
  },
];

export const accordion = [
  {
    id: 1,
    title: "How do I schedule an appointment?",
    titleStyles: "text-[16px] text-[#323232] font-bold",
    text: "Scheduling an appointment is simple and convenient. Just browse available specialists on E-Medatt, choose a provider that fits your needs, and select a time that works for you. You can book directly through our platform in just a few clicks.",
    textStyles: "text-[14px] text-[#323232]",
  },
  {
    id: 2,
    title: "What types of consultations are available?",
    titleStyles: "text-[16px] text-[#323232] font-bold",
    text: "We offer a wide range of consultations, including primary care, mental health, dermatology, pediatrics, and more. You can browse specialties on E-Medatt to find the right fit for your needs.",
    textStyles: "text-[14px] text-[#323232]",
  },
  {
    id: 3,
    title: "Is the consultation secure and private?",
    titleStyles: "text-[16px] text-[#323232] font-bold",
    text: "Yes, your privacy is our top priority. All consultations on E-Medatt are conducted through secure, encrypted connections to ensure confidentiality. Your personal and medical information remains protected at all times.",
    textStyles: "text-[14px] text-[#323232]",
  },
  {
    id: 4,
    title: "Can I change or cancel my appointment?",
    titleStyles: "text-[16px] text-[#323232] font-bold",
    text: "Yes, you can modify or cancel your appointment if needed. Simply log into your E-Medatt account, go to your appointments, and follow the steps to reschedule or cancel. Please check the provider’s cancellation policy for any specific terms.",
    textStyles: "text-[14px] text-[#323232]",
  },
];
export const whyChooseUs = [
  {
    id: 1,
    icon: tickIcon,
    text: "Quick Access to top-notch medical experts in Nigeria",
  },
  {
    id: 2,
    icon: tickIcon,
    text: "Skip the Travel expenses and long wait times",
  },
  {
    id: 3,
    icon: tickIcon,
    text: "Fast Access to medical Care",
  },
  {
    id: 4,
    icon: tickIcon,
    text: "Available Anytime, Anywhere",
  },
  {
    id: 5,
    icon: tickIcon,
    text: "Secure and Private Consultations",
  }
];