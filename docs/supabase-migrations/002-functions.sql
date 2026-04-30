-- Add XP to a user's profile
create or replace function public.add_xp(p_user_id uuid, p_xp integer)
returns void as $$
begin
  update public.profiles
  set xp = xp + p_xp
  where id = p_user_id;
end;
$$ language plpgsql security definer;

-- Allow users to delete their own account (GDPR/CCPA)
create or replace function public.delete_user()
returns void as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$ language plpgsql security definer;
