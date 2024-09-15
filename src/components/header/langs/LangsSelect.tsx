import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LangsSelect() {
  return (
    <Select defaultValue="english">
      <SelectTrigger className="w-[100px] font-semibold text-xs sm:text-sm">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="font-semibold ">
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="burmese">Burmese</SelectItem>
          <SelectItem value="japanese">Japanese</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
