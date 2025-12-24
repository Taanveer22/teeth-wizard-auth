const NotFound = () => {
  return (
    <div className="">
      {/* ✅ TRUST SIGNAL:
            App name visible on every page */}
      <div>
        <h1 className="text-2xl font-semibold">Teeth Wizard</h1>
        <p className="text-xs text-gray-700">
          Demo dental appointment booking application
        </p>
        <h1 className="text-9xl font-bold text-red-500 text-center">
          Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
