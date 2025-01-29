function App() {
    const [cpu, setCpu] = React.useState('');
    const [gpu, setGpu] = React.useState('');
    const [ram, setRam] = React.useState('');
    const [resolution, setResolution] = React.useState('');
    const [bottleneck, setBottleneck] = React.useState(null);

    const cpuOptions = [
        { value: '60', label: 'Intel Core i3' },
        { value: '80', label: 'Intel Core i5' },
        { value: '90', label: 'Intel Core i7' },
        { value: '100', label: 'Intel Core i9' },
        { value: '85', label: 'AMD Ryzen 5' },
        { value: '95', label: 'AMD Ryzen 7' },
        { value: '100', label: 'AMD Ryzen 9' }
    ];

    const gpuOptions = [
        { value: '60', label: 'NVIDIA GTX 1660' },
        { value: '70', label: 'NVIDIA RTX 3060' },
        { value: '80', label: 'NVIDIA RTX 3070' },
        { value: '90', label: 'NVIDIA RTX 3080' },
        { value: '75', label: 'AMD RX 6600' },
        { value: '85', label: 'AMD RX 6700' },
        { value: '95', label: 'AMD RX 6800' }
    ];

    const ramOptions = [
        { value: '4', label: '4GB' },
        { value: '8', label: '8GB' },
        { value: '16', label: '16GB' },
        { value: '32', label: '32GB' },
        { value: '64', label: '64GB' }
    ];

    const resolutionOptions = [
        { value: '60', label: '1080p (1920x1080)' },
        { value: '80', label: '1440p (2560x1440)' },
        { value: '100', label: '4K (3840x2160)' }
    ];

    React.useEffect(() => {
        try {
            const result = calculateBottleneck(cpu, gpu, ram, resolution);
            setBottleneck(result);
        } catch (error) {
            reportError(error);
        }
    }, [cpu, gpu, ram, resolution]);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" data-name="app-container">
            <div className="max-w-md mx-auto" data-name="content-wrapper">
                <div className="text-center mb-8" data-name="header">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2" data-name="main-title">
                        PC Component Bottleneck Calculator
                    </h1>
                    <p className="text-gray-600" data-name="subtitle">
                        Check if your components work well together
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md" data-name="calculator-form">
                    <ComponentSelect
                        label="CPU"
                        options={cpuOptions}
                        value={cpu}
                        onChange={setCpu}
                    />
                    <ComponentSelect
                        label="GPU"
                        options={gpuOptions}
                        value={gpu}
                        onChange={setGpu}
                    />
                    <ComponentSelect
                        label="RAM"
                        options={ramOptions}
                        value={ram}
                        onChange={setRam}
                    />
                    <ComponentSelect
                        label="Resolution"
                        options={resolutionOptions}
                        value={resolution}
                        onChange={setResolution}
                    />
                </div>

                <ResultCard bottleneck={bottleneck} />
            </div>
        </div>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
