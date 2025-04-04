import TaskForm from "@/components/TaskForm";

export default function AuthenticationLayout({ children }) {
  return (
    <main className="w-full">
      <div className="relative">{/* <TaskForm /> */}</div>
      {children}
    </main>
  );
}
