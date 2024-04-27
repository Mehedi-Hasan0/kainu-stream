const PerspectiveText = ({
  children,
  label,
  textColor,
  innerEleStyle = "flex-row",
}) => {
  return (
    <div className={`flex items-center gap-2 2xl:gap-3 ${innerEleStyle}`}>
      <div className={`perspectiveText z-10 ${textColor}`}>
        <p className="relative z-[5] font-semibold 2xl:text-[20px] whitespace-nowrap">
          {label}
        </p>
        <p className="relative z-[5] font-semibold 2xl:text-[20px] whitespace-nowrap">
          {label}
        </p>
      </div>
      {children && (
        <span className="inline-block relative z-20">{children}</span>
      )}
    </div>
  );
};

export default PerspectiveText;
