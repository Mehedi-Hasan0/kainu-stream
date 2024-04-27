const PerspectiveText = ({ children, label, textColor }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className={`perspectiveText z-10 ${textColor}`}>
        <p className="relative z-[5] font-semibold 2xl:text-[20px] whitespace-nowrap">
          {label}
        </p>
        <p className="relative z-[5] font-semibold 2xl:text-[20px] whitespace-nowrap">
          {label}
        </p>
      </div>
      <span className="inline-block relative z-20">{children}</span>
    </div>
  );
};

export default PerspectiveText;
