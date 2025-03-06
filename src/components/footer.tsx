export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-8">
      <div className="container text-center">
        <p className="text-slate-600 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Igbokwe Ifechukwu Francis. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

