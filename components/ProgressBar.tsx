type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>
          Paso {current} de {total}
        </span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}