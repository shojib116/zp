import { Skeleton } from "@/components/ui/skeleton";
import {
  Building2,
  Globe,
  Mail,
  MapPin,
  MapPinHouse,
  Phone,
} from "lucide-react";

export default function UserProfileSkeleton() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <Mail className="w-4 h-4" /> <Skeleton className="h-4 w-40" />
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <Phone className="w-4 h-4" /> <Skeleton className="h-4 w-40" />
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <Globe className="w-4 h-4" /> <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Address */}
        <div className="bg-gray-50 rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2 flex gap-2 items-center">
            <MapPinHouse /> Address
          </h3>
          <div className="pl-8 space-y-2">
            <Skeleton className="h-5 w-50" />
            <Skeleton className="h-5 w-50" />
            <div className="text-sm text-gray-500 flex gap-2 items-center">
              <MapPin className="w-4 h-4" />

              <Skeleton className="h-5 w-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="mt-8 bg-gray-50 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold mb-2 flex gap-2 items-center">
          <Building2 /> Company
        </h3>
        <div className="pl-8 space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-60" />
        </div>
      </div>
    </>
  );
}
