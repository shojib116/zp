import useFetch from "@/lib/hooks/use-fetch";
import type { User } from "@/lib/types";
import {
  Building2,
  Globe,
  Mail,
  MapPin,
  MapPinHouse,
  Phone,
  UserCircle,
} from "lucide-react";

export function UserProfile({ id }: { id: string }) {
  const { data: user } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <UserCircle className="w-12 h-12" />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
          <p className="text-gray-700 flex gap-2 items-center">
            <Mail className="w-4 h-4" /> {user.email}
          </p>
          <p className="text-gray-700 flex gap-2 items-center">
            <Phone className="w-4 h-4" /> {user.phone}
          </p>
          <p className="text-gray-700 flex gap-2 items-center">
            <Globe className="w-4 h-4" />{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-blue-600 underline"
            >
              {user.website}
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="bg-gray-50 rounded-lg p-4 shadow">
          <h3 className="text-lg font-semibold mb-2 flex gap-2 items-center">
            <MapPinHouse /> Address
          </h3>
          <div className="pl-8">
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-sm text-gray-500 flex gap-2 items-center">
              <MapPin className="w-4 h-4" />
              <a
                href={`https://www.google.com/maps?q=${user.address.geo.lng},${user.address.geo.lng}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                View on Map
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="mt-8 bg-gray-50 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold mb-2 flex gap-2 items-center">
          <Building2 /> Company
        </h3>
        <div className="pl-8">
          <p className="font-medium">{user.company.name}</p>
          <p className="italic text-gray-600">{user.company.catchPhrase}</p>
        </div>
      </div>
    </>
  );
}
