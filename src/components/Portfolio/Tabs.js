import React, { Component, cloneElement } from 'react';
import Tab from './Tab';

import { FiMoon } from 'react-icons/fi';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: props.defaultActiveIndex || 0 };
	}

	handleTabClick = (tabIndex) => {
		if (tabIndex !== this.state.activeIndex) {
			this.setState({ activeIndex: tabIndex });
		}
	};

	cloneTabElement = (tab, index = 0) => {
		const { activeIndex } = this.state;

		return cloneElement(tab, {
			onClick: () => this.handleTabClick(index),
			tabIndex: index,
			isActive: index === activeIndex
		});
	};

	renderChildrenTabs = () => {
		const { children } = this.props;

		if (!Array.isArray(children)) {
			return this.cloneTabElement(children);
		}

		return children.map(this.cloneTabElement);
	};

	renderActiveTabContent(): any {
		const { children } = this.props;
		const { activeIndex } = this.state;

		if (children[activeIndex]) {
			return children[activeIndex].props.children;
		}

		return children.props.children;
	}

	render() {
		return (
			<section className="portfolio container" id="portfolio">
				<h2 className="portfolio__title">
					Portfólio <FiMoon />
				</h2>

				<ul className={'tabs'}>{this.renderChildrenTabs()}</ul>
				<div className={'tabs__content'}>{this.renderActiveTabContent()}</div>
			</section>
		);
	}
}

Tabs.Tab = Tab;

export default Tabs;
