interface GradientOverlayProps {
  topOpacity?: number;
  bottomOpacity?: number;
  className?: string;
}

export const GradientOverlay = ({
  topOpacity = 70,
  bottomOpacity = 70,
  className = "",
}: GradientOverlayProps) => {
  return (
    <>
      {/* Dégradé du haut vers le bas */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black via-black/${topOpacity} to-transparent pointer-events-none ${className}`}
      />
      {/* Dégradé du bas vers le haut */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/${bottomOpacity} to-transparent pointer-events-none ${className}`}
      />
    </>
  );
};
