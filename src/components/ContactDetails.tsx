"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { config } from "@/data/config";
import SocialMediaButtons from "./social/social-media-icons";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Link
          href={`mailto:${config.email}`}
          className="flex items-center gap-3 cursor-can-hover rounded-lg text-lg hover:text-primary transition-colors w-fit"
        >
          <Mail className="w-5 h-5 shrink-0" />
          {config.email}
        </Link>
        <Link
          href={`tel:${config.phone}`}
          className="flex items-center gap-3 cursor-can-hover rounded-lg text-lg hover:text-primary transition-colors w-fit"
        >
          <Phone className="w-5 h-5 shrink-0" />
          {config.phone}
        </Link>
      </div>

      <div className="flex items-center gap-2 -ml-2">
        <SocialMediaButtons />
      </div>
    </div>
  );
};

export default ContactDetails;