import React from "react";
import IntentCard from "./IntentCards";
import { intentsData } from "../utils";

const Intents = () => {
	return (
		<div>
			<div>
				<nav className="bg-mute shadow">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<img
										className="h-8 w-8"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
										alt="Workflow"
									/>
								</div>
								<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
									<h1 className="text-3xl font-bold text-gray-900">Intents</h1>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						<div className="px-4 py-6 sm:px-0">
							<div className="block h-50 gap-2 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 lg:gap-4 mt-6">
								{intentsData.map((intent, index) => (
									<div key={intent.id}>
										<IntentCard
											colorCode={intent.colorCode}
                      expression={ intent.trainingData.expressions }
											expressionType={intent.name}
											response={intent.reply.text}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Intents;
