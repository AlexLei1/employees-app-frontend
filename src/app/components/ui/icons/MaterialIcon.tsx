import { FC } from 'react';
import { useRenderClient } from '@/hooks/useRenderClint';
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '@/types/icons.types';

export const MaterialIcon: FC<{name: TypeMaterialIconName}> = ({name}) => {
	const {isRenderClient} = useRenderClient()
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />

};
