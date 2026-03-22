import { supabase } from "@/lib/supabase"

export default async function Admin() {
  const { data } = await supabase.from("users").select("*")

  return (
    <div>
      <h1>Users</h1>
      {data?.map((u: any) => (
        <div key={u.id}>{u.email} - {u.balance}</div>
      ))}
    </div>
  )
}
