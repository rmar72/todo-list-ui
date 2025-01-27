interface ColorPickerProps {
  allowedColors: string[];
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  allowedColors,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className="flex items-center space-x-4">
      {allowedColors.map((color) => (
        <div
          key={color}
          className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
            selectedColor === color ? 'border-white' : 'border-transparent'
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
