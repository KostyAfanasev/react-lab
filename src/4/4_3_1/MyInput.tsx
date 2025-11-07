// Использован useEffect с пустым массивом зависимостей для фокусировки на поле при монтировании
// Поле ввода автоматически получает фокус при появлении на экране

import { useEffect, useRef } from 'react';

export default function MyInput(
    {
        value,
        onChange
    }: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}